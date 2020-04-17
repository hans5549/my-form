$(document).ready(function()
{
    $('#Position').blur(function()
    {
        //讀取職位類型
        const positiondata = $('select.position').children("option:selected").val();

        if (positiondata != "")
        {
            $("#Position_check").animate({color:"blue"});
            $("#Position_check").text($("#Position_check").text().replace("請選擇職位", "選擇成功"));
        }
        else
        {
            $("#Position_check").animate({color:"red"});
            $("#Position_check").text($("#Position_check").text().replace("請選擇職位", "請選擇職位"));
        }
    })
})