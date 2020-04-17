function analysisjson() {
    $(document).ready(function () 
    {
        // 解析文去區域內容
        const NewElement =  $('#Jsoncontenttextarea').val();
        console.log(NewElement);
        const newdata = JSON.parse(NewElement);

        // 解析個別資料
        const Newdata_name = newdata.name_json;
        const Newdata_height = newdata.height_json;
        const Newdata_gender = newdata.gender_json;
        const Newdata_position = newdata.position_json;
        const Newdata_interest = newdata.interest_json;

        $("#form_writting").animate({width:'500px', backgroundColor:"#DD15F1"});
        $("#form_writting").text($("#form_writting").text().replace("填寫中", "資料解析並重填"));
        $("#form_writting").text($("#form_writting").text().replace("尚未填寫", "資料解析並重填"));
        $("#form_writting").text($("#form_writting").text().replace("資料清除", "資料解析並重填"));
        $("#form_writting").text($("#form_writting").text().replace("資料傳送", "資料解析並重填"));

        // 姓名填寫
        $('#Name').val(Newdata_name);    

        // 身高填寫
        $('#Height').val(Newdata_height);

        // 性別填寫
        if (Newdata_gender == "Boy")
        {
            $('input[name="Gender"]')[0].checked = true;
            $('input[name="Gender"]')[1].checked = false;
        }
        else if (Newdata_gender == "Girl")
        {
            $('input[name="Gender"]')[0].checked = false;
            $('input[name="Gender"]')[1].checked = true;
        }

        // 職位填寫
        $('#Position').val(Newdata_position);   

        // 興趣填寫
        for (var i = 0; i < Newdata_interest.length; i++)
        {
            for (var j = 0; j < 10; j++)
            {
                if (Newdata_interest[j] == "Movies")
                {
                    $("#Interest_Movies").prop('checked', true);
                }
                else if (Newdata_interest[j] == "TV")
                {
                    $("#Interest_TV").prop('checked', true);
                }
                else if (Newdata_interest[j] == "Computer")
                {
                    $("#Interest_Computer").prop('checked', true);
                }
                else if (Newdata_interest[j] == "Bike")
                {
                    $("#Interest_Bike").prop('checked', true);
                }
                else if (Newdata_interest[j] == "Volleyball")
                {
                    $("#Interest_Volleyball").prop('checked', true);
                }
                else if (Newdata_interest[j] == "Soccer")
                {
                    $("#Interest_Soccer").prop('checked', true);
                }
                else if (Newdata_interest[j] == "Basketball")
                {
                    $("#Interest_Basketball").prop('checked', true);
                }
                else if (Newdata_interest[j] == "Reading")
                {
                    $("#Interest_Reading").prop('checked', true);
                }
                else if (Newdata_interest[j] == "Hiking")
                {
                    $("#Interest_Hiking").prop('checked', true);
                }
                else if (Newdata_interest[j] == "Fishing")
                {
                    $("#Interest_Fishing").prop('checked', true);
                }
            }
        }

        $("#Name_check, #Gender_check, #Height_check, #Position_check, #Interest_check").animate({color:"blue"});
        $("#Name_check").text($("#Name_check").text().replace("尚未填寫", "填寫完成"));
        $("#Height_check").text($("#Height_check").text().replace("尚未填寫", "範圍內"));
        $("#Height_check").text($("#Height_check").text().replace("超出範圍", "範圍內"));
        $("#Gender_check").text($("#Gender_check").text().replace("請選擇性別", "選擇成功"));
        $("#Position_check").text($("#Position_check").text().replace("請選擇職位", "選擇成功"));
        $("#Interest_check").text($("#Interest_check").text().replace("請選擇興趣", "選擇完成"));
    })
}