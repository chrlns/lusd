function (key, values, rereduce) {
    // Return the maximum numeric value.
    var max = -Infinity
    for (var i = 0; i < values.length; i++) {
        if (values[i] > max || max == -Infinity)
            max = values[i]
    }
    return max
}
