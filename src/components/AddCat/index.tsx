import React from "react";
import { Card } from "antd";
import { Form, Input, Button } from "antd";
import { useMutation } from "@apollo/client";
import { mutation } from "../AddCatsOnServer";
import { GETCATS } from "../GetCatsQuery";

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

export const AddCat: React.FunctionComponent = () => {
  const [form] = Form.useForm();
  const [addCat, { data, loading, error }] = useMutation(mutation, {
    update: (cache, data) => {
      const oldCatCardList: any = cache.readQuery({ query: GETCATS });
      console.log(data);
      console.log(data.data.addCat);
      console.log(oldCatCardList); // старый cache
      const cats = [...oldCatCardList.cats];
      cats.push(data.data.addCat);
      cache.writeQuery({ query: GETCATS, data: { cats } });
    },
  });

  const onFinish = (values: any) => {
    console.log(new Date(values.birthDate).getDate());

    addCat({
      variables: {
        cat: {
          name: values.name,
          age: Number(values.age),
          mood: Number(values.mood),
          birthDate: new Date(values.birthDate).getDate(),
          gender: Boolean(values.gender),
        },
      },
    });
  };

  return (
    <div>
      <div className="site-card-border-less-wrapper">
        <Card title="Cats information" bordered={false} style={{ width: 300 }}>
          <Form
            {...layout}
            form={form}
            name="control-hooks"
            onFinish={onFinish}
          >
            <Form.Item name="name" label="name">
              <Input />
            </Form.Item>
            <Form.Item name="age" label="age">
              <Input />
            </Form.Item>
            <Form.Item name="mood" label="mood">
              <Input />
            </Form.Item>
            <Form.Item name="birthDate" label="BirthDate">
              <Input />
            </Form.Item>
            <Form.Item name="gender" label="gender">
              <Input />
            </Form.Item>
            <Form.Item {...tailLayout}>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </Card>
      </div>
    </div>
  );
};
