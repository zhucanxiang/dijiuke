module.exports = function (req, res) {
    // state: 订单状态，－1 全部，0 未支付，1 已支付
    var response = {
        code: 0,
        message: '',
        data: {
            sub_course_orders: [
                {
                    username: '用户1',
                    student_name: '真实姓名1',
                    student_phone_num: '手机号1',
                    student_email: '邮箱1',
                    time: '报名时间1',
                    total_price: 1000,
                    enter_num: 50,
                    state: 0,
                    pay_channel: 1
                },
                {
                    username: '用户2',
                    student_name: '真实姓名2',
                    student_phone_num: '手机号2',
                    student_email: '邮箱2',
                    time: '报名时间2',
                    total_price: 2000,
                    enter_num: 60,
                    state: 1,
                    pay_channel: 2
                },
                {
                    username: '用户3',
                    student_name: '真实姓名3',
                    student_phone_num: '手机号3',
                    student_email: '邮箱3',
                    time: '报名时间3',
                    total_price: 3000,
                    enter_num: 70,
                    state: 2,
                    pay_channel: 3
                }
            ]
        }
    };
    return response;
};
