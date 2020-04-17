$(document).ready(function()
{
    $('input[type="checkbox"]').blur(function()
    {
        // 讀取興趣內容
        const interestdata = new Array();
        $.each($('input[name="Interest"]:checked'), function()
        {
            interestdata.push($(this).val());
        })

        if (interestdata != "")
        {
            $("#Interest_check").animate({color:"blue"});
            $("#Interest_check").text($("#Interest_check").text().replace("請選擇興趣", "選擇完成"));
        }
        else
        {
            $("#Interest_check").animate({color:"red"});
            $("#Interest_check").text($("#Interest_check").text().replace("選擇完成", "請選擇興趣"));
        }
        
    })
})