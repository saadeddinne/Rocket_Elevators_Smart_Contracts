// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.8.0;

contract MyStringStore {
    uint256 public Display = 0;
    uint256 public Controller = 0;
    uint256 public Cage = 0;
    uint256 public Motor = 0;
    uint256 public Door = 0;
    uint256 public Button = 0;

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
    
    function getData() public view returns(uint[6] memory){

        uint[6] memory data = [
            Controller,
            Cage,
            Motor,
            Door,
            Button,
            Display
        ];

        return data;
    }

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
