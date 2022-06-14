export default function getRandomPrice()
{
    let min = 1000;
    let max = 100000;
    let valor = Math.random()*(max - min) + min;
    let price = (valor / 10);
    return (Math.floor(price) * 10);
}