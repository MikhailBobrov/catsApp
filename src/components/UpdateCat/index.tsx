import React from "react";
import { useQuery, useMutation } from "@apollo/client";
import { CatProps } from "../CatCard";
import { GETCATNAME } from "../CatQuery";
import { mutation } from "../UpdateCatOnServer";
import { useParams } from "react-router-dom";
import { Form, Input, Button, Card, DatePicker } from "antd";
import moment from "moment";

const dateFormat = "YYYY/MM/DD";
const dateFormatList = ["DD/MM/YYYY", "DD/MM/YY"];

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

export const UpdateCat: React.FunctionComponent = () => {
  const [form] = Form.useForm();
  let { name } = useParams();
  console.log(name);
  const { data } = useQuery(GETCATNAME, {
    variables: {
      name: name,
    },
  });

  const [updateCat] = useMutation(mutation);

  const onFinish = (values: any) => {
    console.log(values.birthDate);
    updateCat({
      variables: {
        name: data.cat.name,
        cat: {
          name: values.name,
          age: Number(values.age),
          mood: Number(values.mood),
          birthDate: moment(values.birthDate).format(),
          gender: Boolean(values.gender),
        },
      },
    });
  };

  console.log(moment(data?.cat?.birthDate).format());

  return (
    <div>
      <Card title="Cats information" bordered={false} style={{ width: 300 }}>
        <Form {...layout} form={form} name="control-hooks" onFinish={onFinish}>
          <Form.Item name="name" label="name">
            <Input defaultValue={name} />
          </Form.Item>
          <Form.Item name="age" label="age">
            <Input defaultValue={data?.cat.age} />
          </Form.Item>
          <Form.Item name="mood" label="mood">
            <Input defaultValue={data?.cat.mood} />
          </Form.Item>
          <Form.Item name="birthDate" label="BirthDate">
            <DatePicker defaultValue={moment(data?.cat.birthDate)} />
          </Form.Item>

          <Form.Item {...tailLayout}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};
