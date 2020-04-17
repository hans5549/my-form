$(document).ready(function()
{
    $('input[type="radio"]').blur(function()
    {
        //讀取性別
        const genderdata = $('input[type="radio"]:checked').val();

        if (genderdata == "Girl" || genderdata == "Boy")
        {
            $("#Gender_check").animate({color:"blue"});
            $("#Gender_check").text($("#Gender_check").text().replace("請選擇性別", "選擇成功"));
        }
        else
        {
            $("#Gender_check").animate({color:"red"});
            $("#Gender_check").text($("#Gender_check").text().replace("選擇成功", "請選擇性別"));
        }
        
    })
})