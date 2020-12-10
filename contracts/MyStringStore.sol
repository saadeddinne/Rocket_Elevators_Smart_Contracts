// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.8.0;

contract MyStringStore {
  string public Client = "---Controllers needed---";
  string public Address = "---Cages needed---";
  string public nbBattery = "---Motors needed---";
  // string public myString = "---Service Level---";
  string public nbColumn = "---Doors needed---";
  string public nbElevator = "---Buttons needed---";
  string public nbFloor = "---Displays needed---";

  // function set(string memory x) public {
  //   myString = x;
  // }

  function batterySet(string memory b) public {
    nbBattery = b;
  }

  function addressSet(string memory a) public {
    Address = a;
  }

  function clientSet(string memory c) public {
    Client = c;
  }

  function columnSet(string memory d) public {
    nbColumn = d;
  }

  function elevatorSet(string memory e) public {
    nbElevator = e;
  }

  function floorSet(string memory f) public {
    nbFloor = f;
  }
}