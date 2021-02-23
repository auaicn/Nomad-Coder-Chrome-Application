const a = document.querySelector("#form_style");
function onClickSubmit(event)
{
//     alert( typeof event.target ); // true

    event.preventDefault();
    console.log("auaicn");
    console.log(event.target);

    

}
function main()
{
    a.addEventListener("submit", onClickSubmit);
}
main();