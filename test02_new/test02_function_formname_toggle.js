$(document).ready(function()
{
    count = 0;
    $("#form_name").click(function()
    { 
        $("#form_data_test01").slideToggle("slow");
        $("#form_writting").animate({width:'200px', backgroundColor:"red", color:"white"});
        $("#form_writting").text($("#form_writting").text().replace("資料清除", "填寫中"));
        $("#form_writting").text($("#form_writting").text().replace("資料解析並重填", "填寫中"));
        $("#form_writting").text($("#form_writting").text().replace("尚未填寫", "填寫中"));
        $("#form_writting").text($("#form_writting").text().replace("資料傳送", "填寫中"));
    })
})