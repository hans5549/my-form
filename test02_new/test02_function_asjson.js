function getvalueasjson() {
    $(document).ready(function () {
        $("#form_writting").animate({ width: '300px', backgroundColor: "#F18A15" });
        $("#form_writting").text($("#form_writting").text().replace("填寫中", "資料傳送"));
        $("#form_writting").text($("#form_writting").text().replace("尚未填寫", "資料傳送"));
        $("#form_writting").text($("#form_writting").text().replace("資料清除", "資料傳送"));
        $("#form_writting").text($("#form_writting").text().replace("資料解析並重填", "資料傳送"));

        //讀取名字
        const namedata = $('#Name').val();

        //讀取身高
        const heightdata = $('#Height').val();

        //讀取性別
        const genderdata = $('input[type="radio"]:checked').val();

        //讀取職位類型
        const positiondata = $('select.position').children("option:selected").val();

        //讀取興趣內容
        const interestdata = new Array();
        $.each($('input[name="Interest"]:checked'), function () {
            interestdata.push($(this).val());
        })

        //輸出測試
        console.log("姓名： " + namedata);
        console.log("身高： " + heightdata);
        console.log("性別： " + genderdata);
        console.log("職位類型： " + positiondata);
        console.log("興趣內容： " + interestdata);

        //轉換成JSON格式
        const form_data = {
            name_json: namedata,
            height_json: heightdata,
            gender_json: genderdata,
            position_json: positiondata,
            interest_json: interestdata
        }
        console.log(form_data);

        form_data_global = JSON.stringify(form_data);
        console.log(form_data_global);

        $('#Jsoncontenttextarea').val(form_data_global);
    })
}