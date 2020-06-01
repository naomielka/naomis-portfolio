function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function shuffle(nums) {
    for (var i = nums.length - 1; i > 0; i--) {
        var randIdx = getRandomIntInclusive(1, nums.length - 1);
        var keep = nums[i];
        nums[i] = nums[randIdx];
        nums[randIdx] = keep;
    }
    return nums;
}