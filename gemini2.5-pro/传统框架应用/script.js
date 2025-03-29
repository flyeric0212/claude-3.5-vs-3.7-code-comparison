document
  .getElementById("loginForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // 阻止表单默认提交行为

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // 在实际应用中，您会在这里将用户名和密码发送到服务器进行验证
    console.log("尝试登录...");
    console.log("用户名:", username);
    console.log("密码:", password); // 注意：在实际应用中不要在控制台打印密码

    // 此处可以添加 AJAX 请求或其他登录逻辑
    // 例如:
    // fetch('/api/login', {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify({ username, password })
    // })
    // .then(response => response.json())
    // .then(data => {
    //     if (data.success) {
    //         alert('登录成功!');
    //         // 重定向到用户仪表盘或其他页面
    //         // window.location.href = '/dashboard';
    //     } else {
    //         alert('登录失败: ' + data.message);
    //     }
    // })
    // .catch(error => {
    //     console.error('登录请求出错:', error);
    //     alert('登录过程中发生错误，请稍后重试。');
    // });

    // 简单的提示，表示表单已处理（实际应替换为服务器交互）
    alert(`用户名 "${username}" 尝试登录（仅前端演示）。`);

    // 清空表单（可选）
    // event.target.reset();
  });
