$(document).ready(function()
{
    $('#Height').blur(function()
    {
        //讀取身高
        const heightdata = $('#Height').val();
        
        if (heightdata > 0 && heightdata <= 200)
        {
            $("#Height_check").animate({color:"blue"});
            $("#Height_check").text($("#Height_check").text().replace("尚未填寫", "範圍內"));
            $("#Height_check").text($("#Height_check").text().replace("超出範圍", "範圍內"));
        }
        else if (heightdata > 200)
        {
            $("#Height_check").animate({color:"red"});
            $("#Height_check").text($("#Height_check").text().replace("尚未填寫", "超出範圍"));
            $("#Height_check").text($("#Height_check").text().replace("範圍內", "超出範圍"));
        }
    })
})