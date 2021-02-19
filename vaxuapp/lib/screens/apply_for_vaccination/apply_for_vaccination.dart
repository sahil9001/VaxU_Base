import 'dart:convert';
import 'package:shared_preferences/shared_preferences.dart';
import 'package:flutter/material.dart';
import 'package:vaxuapp/constants.dart';
import 'package:vaxuapp/screens/apply_for_vaccination/widgets/kyc_form.dart';
import 'package:vaxuapp/screens/menu/tabs/profile/profile.dart';
import 'package:vaxuapp/screens/apply_for_vaccination/widgets/successapplication.dart';
import 'package:http/http.dart' as http;

class ApplyResponse {
  final bool applied_for_vaccination;
  ApplyResponse({
    this.applied_for_vaccination,
  });
  factory ApplyResponse.fromJson(Map<String, dynamic> json) {
    return new ApplyResponse(applied_for_vaccination: json['applied_for_vaccination']);
  }
}

Future<ApplyResponse> fetchResponse() async {
  SharedPreferences prefs = await SharedPreferences.getInstance();
  String token = prefs.getString("token");
  final response = await http.get('http://$URL_HOST/api/users/apply/check/',
      headers: {'accept': 'application/json', "Authorization": "$token"});
  if (response.statusCode == 200) {
    return ApplyResponse.fromJson(jsonDecode(response.body));
  } else {
    throw Exception('Failed to load');
  }
}

class VaccinationApply extends StatefulWidget {
  @override
  _VaccinationApplyState createState() => _VaccinationApplyState();
}

class _VaccinationApplyState extends State<VaccinationApply> {
  Future<ApplyResponse> futureResponse;
  @override
  void initState() {
    super.initState();
    futureResponse = fetchResponse();
  }

  Widget build(BuildContext context) {
    return Scaffold(
      resizeToAvoidBottomPadding: false,
      appBar: buildDetailsAppBar(context),
      body: Padding(
        padding: EdgeInsets.symmetric(horizontal: 20),
        child: FutureBuilder<ApplyResponse>(
            future: futureResponse,
            builder: (BuildContext context, AsyncSnapshot snapshot) {
              if (snapshot.hasData) {
                if (snapshot.data.applied_for_vaccination == true) {
                  return SuccessApplication();
                } else {
                  return KycScreen();
                }
              } else if (snapshot.hasError) {
                return Text("error");
              }
              return CircularProgressIndicator();
            }),
      ),
    );
  }

  AppBar buildDetailsAppBar(BuildContext context) {
    return AppBar(
      backgroundColor: kBackgroundColor,
      elevation: 0,
      leading: IconButton(
        icon: Icon(
          Icons.arrow_back_ios,
          color: kPrimaryColor,
        ),
        onPressed: () {
          Navigator.of(context)
              .pop(MaterialPageRoute(builder: (BuildContext context) => ProfileScreen()));
        },
      ),
      actions: <Widget>[],
    );
  }
}
