// add whatever parameters you deem necessary
function constructNote(str1, str2) {
    if (str1.length > str2.lenghth) return false;

    function frequencyCounter(str) {
        let counts = {};
        for (let ltr of str) {
            counts[ltr] = counts[ltr] + 1 || 1;
        }
        return counts;
    }

    let result1 = frequencyCounter(str1);
    let result2 = frequencyCounter(str2);

    for (let key in result1) {
        if (! result2[key]) return false;
        if (result1[key] > result2[key]) return false;
    }

    return true;
}


module.exports = constructNote;