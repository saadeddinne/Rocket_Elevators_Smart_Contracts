// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.8.0;
// Enable ABIEncoderV2 to use Structs as Function parameters
pragma experimental ABIEncoderV2;

contract ProjectOffice {
    // command items
    Items[] items;
    address clients;
    // Data Structure
    struct Items {
        uint256 shafts; // =elevators
        uint256 controllers; //batteries
        uint256 doors;
        uint256 buttons;
        uint256 displays; //lcd
        uint256 motors; // = elevators
    }

    // +-------------+-----------------+--------+--+
    // |    Items    |     Amount      | Total  |  |
    // +-------------+-----------------+--------+--+
    // | Controllers | 1/ Battery      |      1 |  |
    // | Cages       | 1 /elevator     |      8 |  |
    // | Motors      | 2 /elevator     |     16 |  |
    // | Doors       | 5 f x 2 d x 8 e |     80 |  |
    // | Buttons     | 5 /e + 8x 2 C   |    56  |  |
    // | Displays    | 1/elevator      |     8  |  |
    // +-------------+-----------------+--------+--+

    // Create the order:
    function createOrder(
        uint256 batteries,
        uint256 columns,
        uint256 elevators,
        uint256 Floors
    ) public {
        Items memory order;
        order.shafts = elevators; //8
        order.controllers = batteries; // 1
        order.doors = (elevators * Floors) * 2; // 80
        order.buttons = (elevators * 5) + (columns * 8); //56
        order.displays = elevators; //8
        order.motors = elevators; //16

        // Add order
        items.push(order);
    }

    // Get items with minimum gaz !
    function getOrder() public view returns (Items[] memory) {
        return items;
    }
}
