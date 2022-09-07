// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract Todo {

  struct Task {
    uint id;
    string title;
    string content;
    bool completed;
  }

  mapping(uint => Task) tasks;
  uint[] taskIds;

  constructor() {
    taskIds = new uint[](0);
  }

  event TaskCreated(uint taskId);
  event TaskToggled(uint taskId);

  function createTask(string memory title, string memory content) external {
    uint taskId = uint(keccak256(abi.encodePacked(msg.sender, block.timestamp)));
    tasks[taskId] = Task(taskId, title, content, false);
    taskIds.push(taskId);
    emit TaskCreated(taskId);
  }

  function getTask(uint id) taskExists(id) external view returns (uint, string memory, string memory, bool) {
    Task memory task = tasks[id];
    return (task.id, task.title, task.content, task.completed);
  }

  function toggleTaskStatus(uint id) taskExists(id) external {
    Task memory task = tasks[id];
    task.completed = !task.completed;
    tasks[id] = task;
    emit TaskToggled(id);
  }

  function getAllTaskIds() external view returns (uint[] memory) {
    return taskIds;
  }

  modifier taskExists(uint id) {
    require(tasks[id].id != 0, "Task does not exist");
    _;
  }

}
