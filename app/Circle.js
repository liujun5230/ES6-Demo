let Circle = (x,y,r) => {
    let r_squared = () => Math.pow(r,2);
    let  area = (() => Math.PI * r_squared())();
    return {area: area}
};

module.exports = Circle;