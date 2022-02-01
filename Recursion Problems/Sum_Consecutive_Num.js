var consecutive = function(nums, value) {
  if (nums === 0) {
    return value;
  }
  value = value + nums;
  consecutive(nums-1, value);
};


var consecutive = function(num) {
  if (num === 1) {
    return num;
  }
  return num + consecutive(num - 1);
}