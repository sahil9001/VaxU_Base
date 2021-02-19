import 'package:flutter/material.dart';
import 'package:vaxuapp/src/home_final_screen.dart';
import 'package:vaxuapp/src/loginPage.dart';
import 'package:vaxuapp/src/profile_page.dart';

void main() => runApp(MyApp());

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Covid Demo',
      routes: {
        '/': (context) => LoginPage(),
        '/login': (context) => LoginPage(),
        '/home': (context) => HomeFinalScreen(),
        '/profile': (context) => ProfileScreen()
      },
      theme: ThemeData(
        primarySwatch: Colors.green,
      ),
    );
  }
}
