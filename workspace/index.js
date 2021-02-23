const a = document.querySelector("#form_style");
function onClickSubmit(event)
{
//     alert( typeof event.target ); // true

    event.preventDefault();
    console.log("auaicn");
    console.log(event.target);

    read();
    // read 가지고 확인
    
    // 괜찮으면
    create();

    alert("아이디가 생성되었습니다");
}

function main()
{
    intializeConnection();

    a.addEventListener("submit", onClickSubmit);
    a.addEventListener("submit", onClickSubmit);
    a.addEventListener("submit", onClickSubmit);
    a.addEventListener("submit", onClickSubmit);
    a.addEventListener("submit", onClickSubmit);
    a.addEventListener("submit", onClickSubmit);
}

function intializeConnection()
{
    // http
}

function create()
{
    // json
    // send
}

function read()
{
    // json
    // send
}

function update()
{
    // json
    // send
}

function delete()
{
    // json
    // send
}

main();