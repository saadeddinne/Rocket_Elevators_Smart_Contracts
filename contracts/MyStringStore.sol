// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.8.0;

contract MyStringStore {
  string public Controller = "---Controllers needed---";
  string public Cage = "---Cages needed---";
  string public Motor = "---Motors needed---";
  // string public myString = "---Service Level---";
  string public Door = "---Doors needed---";
  string public Button = "---Buttons needed---";
  string public Display = "---Displays needed---";

  // function set(string memory x) public {
  //   myString = x;
  // }

  function motorSet(string memory b) public {
    Motor = b;
  }

  function cageSet(string memory a) public {
    Cage = a;
  }

  function controllerSet(string memory c) public {
    Controller = c;
  }

  function doorSet(string memory d) public {
    Door = d;
  }

  function buttonSet(string memory e) public {
    Button = e;
  }

  function displaySet(string memory f) public {
    Display = f;
  }
}