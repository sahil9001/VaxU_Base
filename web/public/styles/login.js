var host = "file///home/sahil/Desktop/Projects/VaxU_base";
function trylogin(){
            var _token;
            var userName = document.getElementById('username').value;
            var password = document.getElementById('password').value;
            var urlToHit = "http://20.198.3.123:80/api/users/vacc/login/";
            var request = new XMLHttpRequest();

            function getToken(urlToHit, email, password){
                var key;
                request.open("POST", urlToHit, true);
                request.setRequestHeader("Content-type", "application/json");
                request.onreadystatechange = function() {
                    if(request.readyState == 4 && request.status == 202){
                        var response = request.responseText;
                        var obj = JSON.parse(response);
                        console.log(obj);
                        key = obj.token;
                        localStorage.setItem('token', key);
                        console.log('token is : ' + key);
                        success(userName);
                    }
                    /*else{
                        alert("Error : " + request.readyState);
                    }*/
                }
                var data = {
                    "email"  : email,
                    "password" : password
                };
                console.log(data);
                request.send(JSON.stringify(data));
                console.log(request.status);
                console.log('Hi');
                
            }
            //request.withCredentials = true;
            getToken(urlToHit, userName, password);
        }
        function success(userName){
            curr_url = location.href;
            location.href =  host + "/dashboard.html";
            console.log(location.href);
            document.getElementById("user_name").innerHTML = userName;
            console.log('Hi');
        }
        
        function logout(){
            localStorage.removeItem('token');
        }