const Struct = require("../").default;

const userStruct = new Struct({
  name: {
    require: true,
    msg: "用户名称为必填，且长度必须是2-3",
    type: "string",
    maxLength: 3,
    minLength: 2
  },
  age: {
    msg: "age必须是数字",
    type: "number" // 'object' | 'number' | 'array' | 'string' | 'boolean'
  },
  isStudent: {
    type: "boolean"
  },
  sex: {
    msg: "必须是男",
    validator: function(v) {
      return v === "男"; // 返回 true 则表示校验通过
    }
  },
  tags: {
    msg: "tags必须是数组",
    type: "array" // 'object' | 'number' | 'array' | 'string' | 'boolean'
  }
});

const tagStruct = new Struct({
  tagName: {
    type: "string"
  }
});

const user = {
  name: "AA",
  sex: "男",
  age: 10,
  isStudent: "",
  tags: [
    {
      tagName: "AAA"
    },
    {
      tagName: "BBB"
    }
  ]
};

// 校验对象
console.log(userStruct.validate(user));
// 默认只校验第一层结构，如果要校验子对象，需要如下处理：
for (let i = 0; i < user.tags.length; i++) {
  console.log(tagStruct.validate(user.tags[i]));
}
