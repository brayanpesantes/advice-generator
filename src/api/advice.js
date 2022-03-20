const URL = "https://api.adviceslip.com/advice";

export const getAdvice = async () => {
    const data = await fetch(URL);
    const res = await data.json();
    console.log(res);
    return res.slip
}