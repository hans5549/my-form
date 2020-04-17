$(document).ready(function()
{
    $("#Name").blur(function()
    {
        if ($('#Name').val() != "")
        {
            $("#Name_check").animate({color:"blue"});
            $("#Name_check").text($("#Name_check").text().replace("尚未填寫", "填寫完成"));
        }
        else
        {
            $("#Name_check").animate({color:"red"});
            $("#Name_check").text($("#Name_check").text().replace("尚未填寫", "尚未填寫"));
        }
    }
    )
})