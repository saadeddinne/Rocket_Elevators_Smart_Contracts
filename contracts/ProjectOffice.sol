// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.8.0;

contract ProjectOffice {
    // project Office contract variables to define the order
    uint256 public Display = 0;
    uint256 public Controller = 0;
    uint256 public Cage = 0;
    uint256 public Motor = 0;
    uint256 public Door = 0;
    uint256 public Button = 0;

    // to initialize the contract !!
    function stringSet(
        uint256 b,
        uint256 a,
        uint256 c,
        uint256 d,
        uint256 e,
        uint256 f
    ) public {
        Cage = a;
        Controller = c;
        Button = e;
        Door = d;
        Display = f;
        Motor = b;
    }

    // to get the contract data !!
    // the view consume less gas and much more cheep !!
    //  the return value is a public array with the data
    function getData() public view returns (uint256[6] memory) {
        uint256[6] memory data = [
            Controller,
            Cage,
            Motor,
            Door,
            Button,
            Display
        ];

        return data;
    }

    //  the first versions we keep it in case we fail to plug in with other nodes to detect the problem
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

    function displaySet(uint256 f) public {
        Display = f;
    }
}
