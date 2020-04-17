function cleardata() {
    $(document).ready(function () 
    {
        $("#form_writting").animate({width:'400px', backgroundColor:"#15ABF1 "});
        $("#form_writting").text($("#form_writting").text().replace("填寫中", "資料清除"));
        $("#form_writting").text($("#form_writting").text().replace("尚未填寫", "資料清除"));
        $("#form_writting").text($("#form_writting").text().replace("資料傳送", "資料清除"));
        $("#form_writting").text($("#form_writting").text().replace("資料解析並重填", "資料清除"));

        $('#Name').val("");    

        $('#Height').val("");

        $('input[name="Gender"]:checked').prop('checked', false);

        $('#Position option:selected').prop('selected', false);

        $('input[type=checkbox]').prop('checked', false);

        $("#Name_check, #Gender_check, #Height_check, #Position_check, #Interest_check").animate({color:"red"});
        $("#Name_check").text($("#Name_check").text().replace("尚未填寫", "尚未填寫"));
        $("#Interest_check").text($("#Interest_check").text().replace("選擇完成", "請選擇興趣"));
        $("#Height_check").text($("#Height_check").text().replace("超出範圍", "尚未填寫"));
        $("#Height_check").text($("#Height_check").text().replace("範圍內", "尚未填寫"));
        $("#Gender_check").text($("#Gender_check").text().replace("選擇成功", "請選擇性別"));
        $("#Position_check").text($("#Position_check").text().replace("選擇成功", "請選擇職位"));
    })
}