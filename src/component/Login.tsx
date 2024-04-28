import React, { useState } from "react";
import { Alert, Button, Form, Input, Select } from "antd";
import LocalStore, { LOCAL_STORAGE } from "@/service/localStore";
import useAuthStore from "@/store/useAuthStore";

const formItemLayout = {
    labelCol: {
        xs: { span: 24 },
        sm: { span: 8 },
    },
    wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 },
    },
};

const tailFormItemLayout = {
    wrapperCol: {
        xs: {
            span: 24,
            offset: 0,
        },
        sm: {
            span: 16,
            offset: 8,
        },
    },
};

const validateMobileNumber = (rule: any, value: any) => {
    const phoneRegExp = /^\d{10}$/;
    if (!value || phoneRegExp.test(value)) {
        return Promise.resolve();
    }
    return Promise.reject("Số điện thoại không đúng định dạng");
};

interface IProps {
    onDone: () => void;
}

const Login = ({ onDone }: IProps) => {
    const [form] = Form.useForm();
    const { update: fetch } = useAuthStore();

    const onFinish = (values: any) => {
        LocalStore.setItem(LOCAL_STORAGE.SESSION, values);
        fetch(values);
        onDone && onDone();
    };

    return (
        <>
            <h1 className="py-4" style={{ fontSize: 20 }}>
                Vui lòng nhập thông tin để chơi game
            </h1>
            <Form {...formItemLayout} form={form} name="register" onFinish={onFinish} style={{ maxWidth: 600 }} scrollToFirstError>
                <Form.Item name="name" label="Tên của bạn" rules={[{ required: true, message: "Vui lòng nhập tên của bạn!", whitespace: true }]}>
                    <Input />
                </Form.Item>

                <Form.Item
                    name="email"
                    label="E-mail"
                    rules={[
                        {
                            type: "email",
                            message: "E-mail không hợp lệ",
                        },
                        {
                            required: true,
                            message: "Vui lòng nhập E-mail của bạn",
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    name="phone"
                    label="Số điện thoại"
                    rules={[{ required: true, message: "Vui lòng nhập số điện thoại của bạn" }, { validator: validateMobileNumber }]}
                >
                    <Input style={{ width: "100%" }} />
                </Form.Item>

                <Form.Item {...tailFormItemLayout} className="flex justify-center">
                    <Button className="m-auto" type="primary" htmlType="submit">
                        Bắt đầu chơi
                    </Button>
                </Form.Item>
            </Form>
        </>
    );
};

export default Login;
