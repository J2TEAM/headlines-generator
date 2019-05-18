'use strict';

(() => {
  new Vue({
    el: '#juno_okyo',
    data: {
      headlines: [
        '10 câu hỏi sẽ khiến cho __REPLACE__ của bạn xấu hổ',
        '13 sự thật tuyệt vời không ai dạy cho chúng ta về __REPLACE__',
        '3 bí mật mà __REPLACE__ của bạn không muốn cho bạn biết',
        '3 nguyên tắc bất di bất dịch để __REPLACE__',
        '30 điều bạn thường bỏ qua nhưng cực quan trọng trong __REPLACE__',
        '4 bí kíp “thần thánh” giúp __REPLACE__ dễ dàng hơn bao giờ hết',
        '4 lời nói dối về __REPLACE__; cứ tin nếu bạn muốn',
        '5 bí mật các chuyên gia __REPLACE__ không muốn bạn biết',
        '5 cách nhanh chóng và dễ dàng để __REPLACE__',
        '6 __REPLACE__ bạn cần ngừng lại ngay lập tức',
        '6 luật lệ __REPLACE__ cần được phá vỡ',
        '6 sự thật chẳng ai biết về __REPLACE__',
        '6 việc __REPLACE__ bạn có thể làm trong vòng ít hơn 10 phú',
        '7 bài học về __REPLACE__ tôi đã không dễ dàng mà học được',
        '7 lối tắt bí mật trong __REPLACE__',
        '8 điều nên thử khi __REPLACE__',
        '99% người dùng không biết về __REPLACE__',
        '__REPLACE__ lừa đảo và cách phòng tránh',
        '__REPLACE__ như một chuyên gia trong 5 bước đơn giản',
        '__REPLACE__ như điên',
        'Bạn đang tự lừa dối bản thân về __REPLACE__',
        'Cho tôi 9 phút và tôi sẽ cho bạn __REPLACE__',
        'Cách ít người biết để __REPLACE__',
        'Cảnh báo: Những điều bạn phải biết về __REPLACE__',
        'Dân tình sục sôi với chuyện __REPLACE__',
        'Hãy coi chừng nếu __REPLACE__',
        'Hé lộ điều ít ai biết về __REPLACE__',
        'Hé lộ điều ít ai biết về __REPLACE__',
        'Không thể cầm lòng trước __REPLACE__',
        'Kinh ngạc bí mật sau __REPLACE__',
        'Kinh ngạc bí mật về __REPLACE__',
        'Lý do __REPLACE__ sẽ vẫn cứ “hot” dù ba năm đã trôi qua',
        'Lý do thôi thúc bạn nên __REPLACE__',
        'Lật tẩy những cách kiếm tiền bằng __REPLACE__',
        'Ngỡ ngàng với lợi ích không ngờ __REPLACE__',
        'Sống sung sướng như ông hoàng bà tướng với __REPLACE__',
        'Sự thật và Dối trá trên __REPLACE__',
        'Thoát khỏi __REPLACE__ một lần và mãi mãi',
        'Thật không thể tin nổi __REPLACE__',
        'Tiết lộ kinh ngạc __REPLACE__',
        'Tôi xin được vén bức màn bí mật về __REPLACE__',
        'Tất tần tật những sự thật hay ho thú vị của __REPLACE__',
        'Đây chính là __REPLACE__ mà mọi người thèm muốn',
        'Đây mới là ý nghĩa thực sự của __REPLACE__',
        'Đừng đọc bài viết này nếu __REPLACE__',
        '“Ngã ngửa” khi biết sự thật đằng sau __REPLACE__'
      ],
      headlines2: [
        '15 thủ thuật __REPLACE__ cho __REPLACE__',
        '33 thủ thuật để __REPLACE__ nhiều hơn và __REPLACE__ ít hơn',
        '5 cạm bẫy của __REPLACE__: tạm biệt __REPLACE__ mãi mãi',
        '5 lý do khiến __REPLACE__ tốt hơn __REPLACE__',
        '7 __REPLACE__ sai lầm mà mọi __REPLACE__ đều mắc phải',
        '7 lý do khiến __REPLACE__ là những __REPLACE__ tồi tệ nhất',
        '9 cách để đột phá __REPLACE__ của bán mà không cần __REPLACE__',
        '9 điều mà __REPLACE__ của bạn đang lừa dối bạn về __REPLACE__',
        '__REPLACE__ phơi bày bí mật của __REPLACE__',
        '__REPLACE__ tồi tệ nhất thế giới về __REPLACE__',
        'Cuối cùng thì bạn cũng có thể __REPLACE__ trong __REPLACE__',
        'Cảnh báo: Nếu bạn vẫn __REPLACE__, bạn phải __REPLACE__',
        'Cảnh báo: Đừng __REPLACE__ nếu bạn __REPLACE__',
        'Hàng trăm __REPLACE__ không thể sai được. Tại sao __REPLACE__',
        'Làm sao để tránh __REPLACE__: một bí mật về __REPLACE__',
        'Nếu bạn đã chán ngấy __REPLACE__, hãy thử __REPLACE__',
        'Sai lầm chết người __REPLACE__ mắc phải khi __REPLACE__',
        'Sau khi xem/đọc __REPLACE__ bạn sẽ muốn __REPLACE__ ngay lập tức',
        'Shock với __REPLACE__ cực lớn của __REPLACE__',
        'Suốt __REPLACE__ năm qua chưa ai phát hiện ra điều này ở __REPLACE__',
        'Tìm hiểu vì sao hàng ngàn __REPLACE__ làm __REPLACE__ mỗi ngày',
        'Đằng sau __REPLACE__ gây sốc của __REPLACE__',
        'Đừng đầu tư tiền vào __REPLACE__, thay vào đó hãy mua ngay __REPLACE__',
      ],
      key1: '',
      key2: '',
      loading: false,
      result: null
    },
    methods: {
      onSubmit() {
        this.loading = true;
        let headlines = (this.key2 !== '') ? this.headlines2 : this.headlines;
        let template = headlines[this.getRandomInt(0, headlines.length)];

        // Render template
        template = template.replace('__REPLACE__', this.key1);

        if (this.key2 !== '')
          template = template.replace('__REPLACE__', this.key2);

        this.result = template;

        setTimeout(() => {
          this.loading = false;
        }, 300);
      },
      getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
      }
    }
  });
})();