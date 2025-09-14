# 🚀 DynamicThread - 动态线程池DEV面板

<div align="center">

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Node](https://img.shields.io/badge/node-%3E%3D20.10.0-brightgreen.svg)
![Vue](https://img.shields.io/badge/vue-3.x-brightgreen.svg)
![TypeScript](https://img.shields.io/badge/typescript-5.x-blue.svg)
![Element Plus](https://img.shields.io/badge/element--plus-latest-409EFF.svg)

**对标美团动态、告警、可观测线程池管理系统**

[在线预览](https://your-demo-url.com) | [使用文档](https://your-docs-url.com) | [更新日志](./CHANGELOG.md)

</div>

## 📖 项目简介

DynamicThread 是一个基于 Vue 3 + TypeScript + Element Plus 构建的现代化动态线程池管理系统。该系统提供了完整的线程池配置、监控、告警和可视化功能，帮助开发者更好地管理和优化应用程序的线程池资源。

### ✨ 核心特性

- 🎯 **动态配置** - 支持线程池参数的实时动态调整，无需重启应用
- 📊 **实时监控** - 提供线程池运行状态的实时监控和可视化展示
- 🔔 **智能告警** - 支持多种告警策略，及时发现线程池异常
- 📈 **数据可视化** - 集成 Grafana 仪表板，提供丰富的监控图表
- 🌐 **多环境支持** - 支持开发、测试、生产等多环境配置管理
- 🔐 **权限管理** - 完善的用户权限和访问控制机制
- 📱 **响应式设计** - 支持桌面端和移动端的完美适配

## 🏗️ 技术架构

### 前端技术栈

- **框架**: Vue 3.x + TypeScript
- **构建工具**: Vite 5.x + Turbo
- **UI 组件**: Element Plus
- **状态管理**: Pinia
- **路由管理**: Vue Router 4.x
- **HTTP 客户端**: 自定义 Request Client
- **样式方案**: TailwindCSS + SCSS
- **代码规范**: ESLint + Prettier + Stylelint
- **包管理**: pnpm (Monorepo)

### 项目结构

```
DynamicThread/
├── apps/                          # 应用目录
│   └── web-ele/                   # Element Plus 版本应用
│       ├── src/
│       │   ├── api/               # API 接口
│       │   ├── views/             # 页面组件
│       │   │   ├── threadPool/    # 线程池管理
│       │   │   ├── dashboard/     # 仪表板
│       │   │   └── services/      # 服务管理
│       │   ├── router/            # 路由配置
│       │   ├── store/             # 状态管理
│       │   └── utils/             # 工具函数
│       └── package.json
├── packages/                      # 共享包目录
│   ├── @core/                     # 核心包
│   ├── effects/                   # 效果包 (布局、组件等)
│   ├── locales/                   # 国际化
│   ├── stores/                    # 状态管理
│   ├── styles/                    # 样式
│   └── utils/                     # 工具函数
├── internal/                      # 内部工具
│   ├── lint-configs/              # 代码规范配置
│   ├── vite-config/               # Vite 配置
│   └── tailwind-config/           # TailwindCSS 配置
└── scripts/                       # 构建脚本
```

## 🚀 快速开始

### 环境要求

- **Node.js**: >= 20.10.0
- **pnpm**: >= 9.12.0
- **Git**: 最新版本

### 安装依赖

```bash
# 克隆项目
git clone https://github.com/your-username/dynamic-thread.git

# 进入项目目录
cd dynamic-thread

# 安装依赖
pnpm install
```

### 开发环境启动

```bash
# 启动开发服务器
pnpm dev:ele

# 或者使用交互式启动
pnpm dev
```

### 构建部署

```bash
# 构建生产版本
pnpm build:ele

# 预览构建结果
pnpm preview

# 构建并分析包大小
pnpm build:analyze
```

## 📋 功能模块

### 🎛️ 线程池管理

- **配置管理**: 支持核心线程数、最大线程数、队列容量等参数配置
- **动态调整**: 实时修改线程池参数，立即生效
- **批量操作**: 支持多个线程池的批量配置和管理
- **配置模板**: 提供常用配置模板，快速创建线程池

### 📊 监控面板

- **实时监控**: 线程池运行状态实时展示
- **性能指标**: CPU 使用率、内存占用、任务执行情况
- **历史数据**: 支持历史数据查询和趋势分析
- **自定义仪表板**: 可自定义监控面板布局

### 🔔 告警系统

- **多种告警策略**: 支持队列阈值、活跃线程阈值等告警规则
- **告警通知**: 支持邮件、短信、钉钉等多种通知方式
- **告警历史**: 完整的告警记录和处理历史
- **告警静默**: 支持告警静默和告警抑制功能

### 📈 数据可视化

- **Grafana 集成**: 内置 Grafana 仪表板模板
- **多维度图表**: 支持折线图、柱状图、热力图等多种图表
- **数据导出**: 支持监控数据的导出和分析
- **自定义报表**: 可创建自定义监控报表

## 🔧 配置说明

### 环境变量配置

```bash
# 应用标题
VITE_APP_TITLE=动态线程池

# 应用命名空间
VITE_APP_NAMESPACE=vben-web-ele

# API 接口地址
VITE_GLOB_API_URL=/api

# 开发服务器端口
VITE_PORT=5777
```

### 线程池配置示例

```typescript
interface ThreadPoolConfig {
  namespace: string;          // 命名空间
  serviceName: string;        // 服务名称
  threadPoolId: string;       // 线程池ID
  corePoolSize: number;       // 核心线程数
  maximumPoolSize: number;    // 最大线程数
  queueCapacity: number;      // 队列容量
  workQueue: string;          // 队列类型
  rejectedHandler: string;    // 拒绝策略
  keepAliveTime: number;      // 空闲时间
  allowCoreThreadTimeOut: boolean; // 核心线程超时
}
```

## 🛠️ 开发指南

### 代码规范

项目使用 ESLint + Prettier + Stylelint 进行代码规范检查：

```bash
# 代码检查
pnpm lint

# 自动修复
pnpm format

# 类型检查
pnpm check:type
```

### 提交规范

使用 Conventional Commits 规范：

```bash
# 功能开发
git commit -m "feat: 添加线程池动态配置功能"

# 问题修复
git commit -m "fix: 修复告警通知发送失败问题"

# 文档更新
git commit -m "docs: 更新 API 文档"
```

### 新增功能模块

1. 在 `apps/web-ele/src/views/` 下创建新的功能模块
2. 在 `apps/web-ele/src/api/` 下添加对应的 API 接口
3. 在 `apps/web-ele/src/router/routes/modules/` 下配置路由
4. 在 `packages/locales/` 下添加国际化文本

## 🧪 测试

```bash
# 运行单元测试
pnpm test:unit

# 运行 E2E 测试
pnpm test:e2e

# 测试覆盖率
pnpm test:coverage
```

## 📦 部署

### Docker 部署

```bash
# 构建 Docker 镜像
pnpm build:docker

# 运行容器
docker run -p 80:80 dynamic-thread:latest
```

### Nginx 配置

```nginx
server {
    listen 80;
    server_name your-domain.com;
    
    location / {
        root /usr/share/nginx/html;
        try_files $uri $uri/ /index.html;
    }
    
    location /api {
        proxy_pass http://backend-server:8080;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
    }
}
```

## 🤝 贡献指南

我们欢迎所有形式的贡献，包括但不限于：

- 🐛 报告 Bug
- 💡 提出新功能建议
- 📝 改进文档
- 🔧 提交代码

### 贡献流程

1. Fork 本仓库
2. 创建特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 创建 Pull Request

## 📄 许可证

本项目基于 [MIT](./LICENSE) 许可证开源。

## 🙏 致谢

- [Vue.js](https://vuejs.org/) - 渐进式 JavaScript 框架
- [Element Plus](https://element-plus.org/) - 基于 Vue 3 的组件库
- [Vben Admin](https://github.com/vbenjs/vue-vben-admin) - 现代化的管理后台模板
- [Vite](https://vitejs.dev/) - 下一代前端构建工具
- [TypeScript](https://www.typescriptlang.org/) - JavaScript 的超集

## 📞 联系我们

- 📧 邮箱: your-email@example.com
- 💬 微信群: 扫描二维码加入技术交流群
- 🐛 问题反馈: [GitHub Issues](https://github.com/your-username/dynamic-thread/issues)

---

<div align="center">

**如果这个项目对你有帮助，请给我们一个 ⭐️**

Made with ❤️ by DynamicThread Team

</div>
