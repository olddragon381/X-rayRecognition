// Dữ liệu JSON về các bệnh
var diseases = [
    {
        "id": 0,
        "title": "Mở rộng động mạch chủ",
        "color": "orangered",
        "description": "Mở rộng động mạch chủ (hay còn gọi là phình động mạch chủ) là tình trạng khi một phần của động mạch chủ, mạch máu lớn nhất trong cơ thể, bị giãn ra và lớn hơn so với kích thước bình thường. Động mạch chủ kéo dài từ tim xuống tới bụng và phân phối máu giàu oxy cho toàn bộ cơ thể. Khi động mạch chủ mở rộng, thành mạch máu trở nên yếu hơn và có nguy cơ vỡ cao, dẫn đến chảy máu trong nghiêm trọng, có thể đe dọa tính mạng.",
        "causes": [
            "Xơ vữa động mạch: Tích tụ mảng bám cholesterol trong thành động mạch.",
            "Huyết áp cao: Tăng áp lực trong động mạch chủ có thể gây ra sự mở rộng.",
            "Bệnh di truyền: Như hội chứng Marfan hoặc bệnh Ehlers-Danlos.",
            "Nhiễm trùng: Có thể gây viêm và yếu thành động mạch.",
            "Chấn thương: Các chấn thương nghiêm trọng có thể gây ra tổn thương động mạch chủ."
        ],
        "symptoms": [
            "Đau ngực hoặc đau lưng: Đây là dấu hiệu phổ biến nhất khi động mạch chủ mở rộng hoặc vỡ. Đau có thể đột ngột, dữ dội và lan ra sau lưng.",
            "Khó thở: Nếu động mạch chủ mở rộng chèn ép các cơ quan khác, có thể gây khó thở.",
            "Đau bụng: Nếu phình động mạch chủ bụng, có thể gây đau ở vùng bụng.",
            "Ho hoặc khàn giọng: Động mạch chủ mở rộng có thể chèn ép khí quản hoặc các dây thanh quản.",
            "Hạ huyết áp và ngất xỉu: Khi phình động mạch chủ bị vỡ, huyết áp có thể giảm đột ngột, gây ngất xỉu và sốc."
        ],
        "emergency": "Nếu bạn hoặc ai đó có các triệu chứng trên, đặc biệt là đau ngực dữ dội hoặc ngất xỉu, cần gọi cấp cứu ngay lập tức vì đây có thể là tình trạng khẩn cấp."
    },
    {
        "id": 1,
        "title": "Sụp phổi",
        "color": "orangered",
        "description": "Sụp phổi, hay còn gọi là tràn khí màng phổi, là tình trạng khi không khí thoát ra khỏi phổi và tích tụ trong khoang màng phổi (khoang giữa phổi và thành ngực). Khi không khí tích tụ ở đây, nó gây áp lực lên phổi và làm phổi bị xẹp, khiến người bệnh khó thở.",
        "causes": [
            "Chấn thương ngực: Ví dụ như tai nạn giao thông, vết thương do dao hoặc súng.",
            "Bệnh phổi: Như bệnh phổi tắc nghẽn mãn tính (COPD), lao phổi, viêm phổi, hoặc ung thư phổi.",
            "Các thủ thuật y tế: Như sinh thiết phổi hoặc chọc dò màng phổi.",
            "Nguyên nhân tự phát: Xảy ra mà không có lý do rõ ràng, thường gặp ở người trẻ tuổi, cao và gầy."
        ],
        "symptoms": [
            "Đau ngực: Đau nhói hoặc đau âm ỉ ở một bên ngực, có thể lan ra vai hoặc lưng.",
            "Khó thở: Khó thở đột ngột, đặc biệt là khi hoạt động.",
            "Thở nhanh: Tăng nhịp thở để bù đắp cho phổi bị xẹp.",
            "Nhịp tim nhanh: Tim đập nhanh hơn do cơ thể cố gắng cung cấp đủ oxy.",
            "Mệt mỏi: Cảm thấy mệt mỏi và yếu ớt.",
            "Da và môi xanh: Nếu tình trạng nghiêm trọng và cơ thể không nhận đủ oxy, da và môi có thể chuyển sang màu xanh."
        ],
        "emergency": "Nếu bạn hoặc ai đó có các triệu chứng của sụp phổi, đặc biệt là đau ngực dữ dội hoặc khó thở, cần gọi cấp cứu ngay lập tức vì đây có thể là tình trạng khẩn cấp."
    },
    {
        "id": 2,
        "title": "Canxi hóa",
        "color": "orangered",
        "description": "Canxi hóa là quá trình mà các tinh thể canxi tích tụ trong các mô mềm của cơ thể, biến chúng thành các mô cứng và giòn. Tình trạng này có thể xảy ra ở nhiều bộ phận khác nhau trong cơ thể, bao gồm động mạch, van tim, phổi, thận, và các khớp. Canxi hóa thường xảy ra khi cơ thể cố gắng chữa lành hoặc phản ứng với các tổn thương hoặc viêm nhiễm.",
        "causes": [
            "Xơ vữa động mạch: Mảng bám tích tụ trong động mạch có thể gây ra canxi hóa, làm cứng và hẹp động mạch.",
            "Lão hóa: Quá trình lão hóa tự nhiên có thể dẫn đến canxi hóa, đặc biệt là ở van tim và động mạch.",
            "Bệnh thận mãn tính: Rối loạn chuyển hóa canxi và phốt pho ở người bệnh thận có thể gây canxi hóa mạch máu và mô mềm.",
            "Rối loạn chuyển hóa canxi: Như cường giáp hoặc suy giáp có thể dẫn đến canxi hóa.",
            "Viêm nhiễm hoặc chấn thương: Các tình trạng viêm nhiễm hoặc chấn thương kéo dài có thể dẫn đến sự tích tụ canxi."
        ],
        "symptoms": [
            "Canxi hóa động mạch (Xơ vữa động mạch): Đau ngực (đau thắt ngực), Khó thở, Đau chân khi đi bộ (do lưu lượng máu đến chân bị hạn chế)",
            "Canxi hóa van tim: Khó thở, đặc biệt là khi gắng sức, Mệt mỏi và yếu đuối, Đau ngực, Nhịp tim không đều (rung nhĩ)",
            "Canxi hóa khớp (Viêm khớp canxi hóa): Đau khớp và sưng, Hạn chế phạm vi chuyển động của khớp, Khớp cứng và không linh hoạt",
            "Canxi hóa mô mềm: Cảm giác đau hoặc khó chịu tại vị trí bị ảnh hưởng, Xuất hiện các khối cứng dưới da"
        ],
        "emergency": "Nếu bạn gặp các triệu chứng nghi ngờ liên quan đến canxi hóa, nên tham khảo ý kiến của bác sĩ để được chẩn đoán và điều trị kịp thời. Việc quản lý các yếu tố nguy cơ như kiểm soát huyết áp, chế độ ăn uống lành mạnh, và duy trì lối sống tích cực có thể giúp ngăn ngừa hoặc giảm thiểu sự tiến triển của canxi hóa."
    },
    {
        "id": 3,
        "title": "Tăng kích thước tim",
        "color": "orangered",
        "description": "Tăng kích thước tim, còn được gọi là phì đại tim hoặc tim to, là tình trạng khi tim to hơn so với kích thước bình thường. Điều này có thể do cơ tim dày lên hoặc buồng tim giãn ra. Tăng kích thước tim thường là dấu hiệu của một bệnh tim mạch khác và có thể gây ra nhiều vấn đề sức khỏe nghiêm trọng.",
        "causes": [
            "Huyết áp cao: Áp lực máu cao kéo dài có thể làm tim phải làm việc nhiều hơn, dẫn đến dày cơ tim.",
            "Bệnh van tim: Các vấn đề với van tim có thể làm tim phải bơm máu mạnh hơn, dẫn đến tăng kích thước tim."
        ],
        "symptoms": [
            "Khó thở: Đặc biệt là khi gắng sức hoặc nằm xuống.",
            "Đau ngực: Có thể xuất hiện khi tim không nhận đủ máu."
        ],
        "emergency": "Nếu bạn hoặc ai đó có các triệu chứng nghiêm trọng như khó thở dữ dội, đau ngực kéo dài hơn vài phút, hoặc ngất xỉu, cần gọi cấp cứu ngay lập tức vì đây có thể là dấu hiệu của một cơn đau tim hoặc suy tim cấp tính."
    }
    ,
    {
        "id": 4,
        "title": "Tổn thất (thường là do nước hoặc mảng u mủ)",
        "color": "orangered",
        "description": "Tổn thất do nước hoặc mảng u mủ là tình trạng khi cơ thể hoặc một cơ quan cụ thể bị tổn thương do sự tích tụ của chất lỏng hoặc mủ. Tình trạng này có thể xảy ra do nhiễm trùng, chấn thương hoặc các bệnh lý mãn tính khác, gây ra viêm nhiễm và hủy hoại mô.",
        "causes": [
            "Nhiễm trùng: Vi khuẩn, virus hoặc nấm có thể gây viêm và hình thành mủ.",
            "Chấn thương: Tổn thương vật lý có thể dẫn đến sự tích tụ chất lỏng hoặc mủ trong các mô bị tổn thương."
        ],
        "symptoms": [
            "Đau: Vùng bị ảnh hưởng thường đau và có thể sưng.",
            "Sốt: Sốt cao là một dấu hiệu phổ biến của nhiễm trùng kèm theo mủ."
        ],
        "emergency": "Nếu bạn hoặc ai đó có các triệu chứng nghiêm trọng như sốt cao, đau dữ dội, hoặc các dấu hiệu nhiễm trùng lan rộng, cần gọi cấp cứu ngay lập tức vì đây có thể là dấu hiệu của một nhiễm trùng nghiêm trọng hoặc áp xe cần được điều trị kịp thời."
    },
    {
        "id": 5,
        "title": "Bệnh phổi nội mô",
        "color": "orangered",
        "description": "Bệnh phổi nội mô là tình trạng bệnh lý ảnh hưởng đến các tế bào nội mô trong phổi, có thể dẫn đến viêm nhiễm và tổn thương phổi. Tình trạng này có thể gây ra khó thở và ảnh hưởng nghiêm trọng đến khả năng hô hấp của người bệnh.",
        "causes": [
            "Nhiễm trùng: Vi khuẩn, virus hoặc nấm có thể gây viêm và tổn thương các tế bào nội mô trong phổi.",
            "Rối loạn miễn dịch: Các bệnh tự miễn như lupus hoặc viêm mạch máu có thể gây viêm nhiễm và tổn thương phổi."
        ],
        "symptoms": [
            "Khó thở: Khó thở là triệu chứng phổ biến nhất, đặc biệt là khi gắng sức.",
            "Ho kéo dài: Ho có thể kèm theo đờm hoặc máu."
        ],
        "emergency": "Nếu bạn hoặc ai đó có các triệu chứng nghiêm trọng như khó thở dữ dội, đau ngực, hoặc ho ra máu, cần gọi cấp cứu ngay lập tức vì đây có thể là dấu hiệu của một tình trạng khẩn cấp cần được điều trị kịp thời."
    }
    ,
    {
        "id": 6,
        "title": "Thâm nhập (thường là các chất lỏng hoặc tế bào)",
        "color": "orangered",
        "description": "Thâm nhập là tình trạng khi các chất lỏng hoặc tế bào không bình thường xâm nhập vào các mô hoặc khoang cơ thể, gây ra viêm nhiễm và tổn thương. Tình trạng này có thể xảy ra ở nhiều cơ quan khác nhau và thường liên quan đến các bệnh lý nhiễm trùng hoặc viêm.",
        "causes": [
            "Nhiễm trùng: Vi khuẩn, virus hoặc nấm có thể gây ra sự xâm nhập của các tế bào viêm vào mô.",
            "Rối loạn miễn dịch: Các bệnh tự miễn có thể gây ra sự thâm nhập của tế bào miễn dịch vào các mô, gây viêm và tổn thương."
        ],
        "symptoms": [
            "Sưng và đau: Vùng bị thâm nhập thường sưng và đau.",
            "Sốt và mệt mỏi: Các triệu chứng nhiễm trùng toàn thân như sốt cao và mệt mỏi."
        ],
        "emergency": "Nếu bạn hoặc ai đó có các triệu chứng nghiêm trọng như sốt cao, đau dữ dội, hoặc tình trạng sưng lan rộng, cần gọi cấp cứu ngay lập tức vì đây có thể là dấu hiệu của một tình trạng nhiễm trùng hoặc viêm nghiêm trọng cần được điều trị kịp thời."
    }
    ,
    {
        "id": 7,
        "title": "Độ mờ của phổi",
        "color": "orangered",
        "description": "Độ mờ của phổi là tình trạng khi phổi trở nên mờ trên hình ảnh X-quang hoặc các phương pháp chẩn đoán hình ảnh khác, thường do sự tích tụ của chất lỏng, viêm, hoặc các khối u. Tình trạng này có thể chỉ ra nhiều vấn đề sức khỏe khác nhau, từ nhiễm trùng đến bệnh phổi mãn tính hoặc ung thư.",
        "causes": [
            "Viêm phổi: Nhiễm trùng do vi khuẩn, virus hoặc nấm gây ra sự tích tụ của chất lỏng và tế bào viêm trong phổi.",
            "Suy tim: Tình trạng tim không bơm đủ máu, dẫn đến sự tích tụ chất lỏng trong phổi."
        ],
        "symptoms": [
            "Khó thở: Khó thở hoặc thở nhanh, đặc biệt là khi nằm xuống.",
            "Ho: Ho kéo dài, có thể kèm theo đờm hoặc máu."
        ],
        "emergency": "Nếu bạn hoặc ai đó có các triệu chứng nghiêm trọng như khó thở dữ dội, đau ngực, hoặc ho ra máu, cần gọi cấp cứu ngay lập tức vì đây có thể là dấu hiệu của một tình trạng khẩn cấp cần được điều trị kịp thời."
    }
    ,
    {
        "id": 8,
        "title": "U nhỏ/ khối u",
        "color": "orangered",
        "description": "U nhỏ hoặc khối u là sự hình thành của một khối u nhỏ trong cơ thể, có thể lành tính hoặc ác tính. Tùy thuộc vào vị trí và tính chất của khối u, nó có thể gây ra các triệu chứng và ảnh hưởng đến sức khỏe của người bệnh.",
        "causes": [
            "Nguyên nhân chính là không rõ ràng và có thể bao gồm yếu tố di truyền, môi trường hoặc các yếu tố lối sống.",
            "Các yếu tố gây ung thư như hút thuốc, tiếp xúc với chất độc hại cũng có thể gây ra các khối u ác tính."
        ],
        "symptoms": [
            "Triệu chứng thường là không có dấu hiệu rõ ràng ở các khối u nhỏ hoặc lành tính.",
            "Các triệu chứng có thể xuất hiện khi khối u lớn hơn và gây ảnh hưởng đến các cơ quan xung quanh, ví dụ như đau, sưng, hoặc chảy máu."
        ],
        "emergency": "Nếu bạn phát hiện các triệu chứng như đau hoặc sưng vùng khối u, hoặc các triệu chứng nghiêm trọng như chảy máu không ngừng, cần thăm khám bác sĩ để được tư vấn và chẩn đoán kịp thời."
    },
    {
        "id": 9,
        "title": "Bệnh đốm khác",
        "color": "orangered",
        "description": "Bệnh đốm khác là một thuật ngữ dùng để chỉ các bệnh lý hoặc tình trạng bất thường trong cơ thể, có thể gây ra các biểu hiện khác nhau tùy thuộc vào vị trí và tính chất của đốm.",
        "causes": [
            "Nguyên nhân của các bệnh đốm khác có thể bao gồm di truyền, môi trường hoặc các yếu tố lối sống.",
            "Nhiễm trùng hoặc viêm nhiễm cũng có thể dẫn đến các biểu hiện đốm trên da hoặc các cơ quan khác."
        ],
        "symptoms": [
            "Triệu chứng thường phụ thuộc vào loại và vị trí của bệnh đốm, có thể bao gồm sưng, đau, ngứa hoặc thay đổi màu sắc của da hoặc các cơ quan khác.",
            "Nếu bệnh đốm liên quan đến các bệnh lý nội khoa hoặc hệ thống thần kinh, có thể xuất hiện các triệu chứng khác như hội chứng mệt mỏi, rối loạn tiêu hóa hoặc giảm cường độ giọng nói."
        ],
        "emergency": "Nếu bạn có bất kỳ triệu chứng bất thường nào liên quan đến bệnh đốm, đặc biệt là sưng nhanh chóng, ngứa dữ dội hoặc các triệu chứng nghiêm trọng khác, cần thăm khám bác sĩ để được chẩn đoán và điều trị kịp thời."
    },
    {
        "id": 10,
        "title": "Tràn dịch màng phổi",
        "color": "orangered",
        "description": "Tràn dịch màng phổi là tình trạng khi chất lỏng tích tụ trong khoang màng phổi, gây ra khó thở và có thể gây nguy hiểm đến tính mạng nếu không được xử lý kịp thời.",
        "causes": [
            "Nguyên nhân chủ yếu là suy tim, viêm phổi, ung thư hoặc các bệnh lý nhiễm trùng khác.",
            "Các bệnh lý khác như viêm màng phổi, viêm phổi và các bệnh lý khác có thể dẫn đến sự tích tụ chất lỏng trong màng phổi."
        ],
        "symptoms": [
            "Khó thở: Khó thở nặng nề, đặc biệt khi nằm nghiêng hoặc gắng sức.",
            "Đau ngực: Đau hoặc khó chịu vùng ngực do áp lực từ chất lỏng tràn vào màng phổi."
        ],
        "emergency": "Nếu bạn hoặc ai đó có các triệu chứng như khó thở nghiêm trọng, đau ngực, hoặc có dấu hiệu suy tim như sưng chân, cần gọi cấp cứu ngay lập tức vì đây có thể là tình trạng khẩn cấp cần phải giải quyết kịp thời."
    },
    {
        "id": 11,
        "title": "Độ dày của màng phổi",
        "color": "orangered",
        "description": "Độ dày của màng phổi là tình trạng khi màng bao phủ bề mặt phổi trở nên dày và cứng, thường do sự tích tụ của sẹo hoặc mô vết thương, gây ra hạn chế khả năng phổi phát triển và chức năng hô hấp.",
        "causes": [
            "Nguyên nhân chủ yếu là viêm phổi mãn tính, bệnh tắc nghẽn phổi mạn tính (COPD), hoặc các bệnh lý mô liên quan khác.",
            "Ngoài ra, các bệnh lý nhiễm trùng như lao và nấm phổi cũng có thể gây ra sự tích tụ của sẹo trong màng phổi."
        ],
        "symptoms": [
            "Khó thở: Khó thở khi thực hiện các hoạt động vật lý như đi bộ hoặc leo cầu thang.",
            "Ho: Ho kéo dài, có thể kèm theo đờm hoặc máu do màng phổi bị kích thích."
        ],
        "emergency": "Nếu bạn hoặc ai đó có các triệu chứng như khó thở dữ dội, hoặc có các dấu hiệu nghiêm trọng như ho ra máu, cần gọi cấp cứu ngay lập tức vì đây có thể là tình trạng cần được chẩn đoán và điều trị kịp thời."
    },
    {
        "id": 12,
        "title": "Thủy thũng (khi không khí xâm nhập vào khoang nội màng phổi)",
        "color": "orangered",
        "description": "Thủy thũng là tình trạng khi không khí xâm nhập vào khoang nội màng phổi, gây ra áp xe lên phổi và ảnh hưởng đến chức năng hô hấp của người bệnh.",
        "causes": [
            "Nguyên nhân thường là do chấn thương ngực, các ca phẫu thuật ngực hoặc các yếu tố gây ra rạn màng phổi.",
            "Ngoài ra, các bệnh lý khác như bệnh phổi tắc nghẽn mạn tính (COPD) cũng có thể làm tăng nguy cơ thủy thũng."
        ],
        "symptoms": [
            "Khó thở: Khó thở nặng nề, đặc biệt khi nằm nghiêng hoặc gắng sức.",
            "Đau ngực: Đau hoặc khó chịu vùng ngực do áp lực từ không khí xâm nhập vào màng phổi."
        ],
        "emergency": "Nếu bạn hoặc ai đó có các triệu chứng như khó thở nghiêm trọng, đau ngực dữ dội, hoặc có dấu hiệu suy hô hấp, cần gọi cấp cứu ngay lập tức vì đây có thể là tình trạng cần phải giải quyết ngay kịp thời."
    },
    {
        "id": 13,
        "title": "Xơ phổi",
        "color": "orangered",
        "description": "Xơ phổi là một bệnh lý mà màng phổi trở nên bình thường hoặc sẹo và cứng đi, gây ra hạn chế khả năng phổi mở rộng và chức năng hô hấp.",
        "causes": [
            "Nguyên nhân chủ yếu là viêm phổi mãn tính, bệnh tắc nghẽn phổi mạn tính (COPD), hoặc các bệnh lý mô liên quan khác.",
            "Ngoài ra, các yếu tố như hút thuốc, tiếp xúc với chất độc hại cũng có thể dẫn đến sự phát triển của xơ phổi."
        ],
        "symptoms": [
            "Khó thở: Khó thở khi thực hiện các hoạt động vật lý như đi bộ hoặc leo cầu thang.",
            "Ho: Ho kéo dài, có thể kèm theo đờm hoặc máu do màng phổi bị kích thích."
        ],
        "emergency": "Nếu bạn hoặc ai đó có các triệu chứng như khó thở dữ dội, hoặc có các dấu hiệu nghiêm trọng như ho ra máu, cần gọi cấp cứu ngay lập tức vì đây có thể là tình trạng cần được chẩn đoán và điều trị kịp thời."
    },
];

// Lấy thẻ div theo id "dataxquang"
var outputDiv = document.getElementById("dataxquang");

// Hàm để tạo nội dung HTML từ JSON
function createDiseaseContent(disease) {
    var content = `<p style="color: ${disease.color}; margin: 0; 
    border: 1px solid #333; text-align: center;">${disease.title}<br></p>
    ${disease.description}<br>
    <p style="color: blue; margin: 0;">Nguyên nhân của ${disease.title.toLowerCase()} có thể bao gồm:</p>`;

    disease.causes.forEach(function (cause) {
        content += `+ ${cause}<br>`;
    });

    content += `<p style="color: blue; margin: 0;">Dấu hiệu nhận biết:</p>`;

    disease.symptoms.forEach(function (symptom) {
        content += `+ ${symptom}<br>`;
    });

    content += `<p style="color: red; margin: 0;">${disease.emergency}</p>`;

    return content;
}

// Hàm hiển thị các bệnh dựa trên các ID đã phát hiện
function displayDiseases() {
    diseases.forEach(function (disease) {
        if (detected_ids.includes(disease.id)) {
            var paragraph = document.createElement("div");
            paragraph.id = disease.id;
            paragraph.innerHTML = createDiseaseContent(disease);
            paragraph.style.color = "#000"; // Màu chữ đen
            outputDiv.appendChild(paragraph);
        }
    });
}

// Gọi hàm với tham số chính xác
displayDiseases();

