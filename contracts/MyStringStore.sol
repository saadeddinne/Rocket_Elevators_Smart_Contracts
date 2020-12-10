// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.8.0;

contract MyStringStore {
    // difficile de changer son type a changer
    string public Display = "---Displays needed---";

    uint256 public Controller;
    uint256 public Cage;
    uint256 public Motor;
    uint256 public Door;
    uint256 public Button;

    function motorSet(uint256 b) public {
        Motor = b;
    }

    function cageSet(uint256 a) public {
        Cage = a;
    }

    function controllerSet(uint256 c) public {
        Controller = c;
    }

    function doorSet(uint256 d) public {
        Door = d;
    }

    function buttonSet(uint256 e) public {
        Button = e;
    }

    function displaySet(string memory f) public {
        Display = f;
    }
}
