// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.8.0;

contract ProjectOffice {
    // command items
    Items[] items;
    address clients;
    // Data Structure
    struct Items {
        uint32 shafts;
        uint32 doors;
        uint32 buttons;
        uint32 displays;
        uint32 controllers;
    }
}
