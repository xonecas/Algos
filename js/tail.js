    if ((module && module.exports) || exports) {
        module = module || {};
        exports = module.exports = algos;
    } else {
        window.algos = algos;
    }
}());
