# dsh-cad-scene

**中文**：DSH Web 插件——解析 CAD 图纸（DXF/DWG）为物流仓储 3D 场景。侧边栏「新会话」下方的「📐 3d解析」入口打开双栏面板（CAD 文件导入 + Three.js 场景预览），并为 Agent 提供 `parse_cad_to_scene` 工具及其 3D 工具卡片。

**English**: A DSH Web plugin that parses CAD drawings (DXF/DWG) into logistics-warehouse 3D scenes. A 「📐 3d解析」 row under the sidebar's New Session button opens a dual-pane panel (CAD import + Three.js preview); agents also get a `parse_cad_to_scene` tool with a 3D tool card.

## 功能 / Features

- **侧边栏入口**：「新会话」按钮下方的面板行（📐 3d解析），点击切换中央面板
- **双栏面板**：左侧 CAD 文件导入区（点击/拖拽上传 `.dwg` `.dxf` `.step`，文件名/大小/状态展示，「解析」按钮）；右侧 Three.js 3D 场景区（左键旋转、滚轮缩放、右键平移；点击实体查看图层、块引用、文本标注）
- **场景分类着色**：按图层名关键词分类——货架（橙）、通道（灰）、区域（绿半透明）、AGV（红），并优先使用图纸图层表颜色
- **模型工具** `parse_cad_to_scene`：把图纸解析为结构化 JSON（`racks / aisles / zones / agvs / entities / layers / meta`），工具卡片内嵌同一套 3D 预览
- **DWG 支持**：经外部转换器（LibreDWG `dwg2dxf` 或 ODA File Converter）转 DXF 后解析；DXF 在浏览器内直接解析
- **错误边界**：面板与卡片渲染异常时显示错误信息，不白屏

试用图纸：`sample/sample-warehouse.dxf`（含货架、通道、区域、文本与两个 AGV）。

## 安装 / Install

```sh
# 从 npm（发布后）
dsh plugin --profile web add dsh-cad-scene@latest

# 直接从 GitHub
dsh plugin --profile web add github:YOUR_USERNAME/dsh-cad-scene

# 本地开发（本仓库目录）
dsh plugin --profile web add link:E:/path/to/dsh-cad-scene
```

安装后重启该 Profile（或重启 dsh web），刷新浏览器页面即可看到侧边栏入口。

### DWG 转换器（可选）/ DWG converter (optional)

解析 `.dwg` 需要本机安装其一：

- [ODA File Converter](https://www.opendesign.com/guestfiles/oda_file_converter)（Windows 自动探测 `C:\Program Files\ODA\**\ODAFileConverter.exe`）
- LibreDWG（确保 `dwg2dxf` 在 PATH 上）

也可在 Profile 的 `cordis.patch.yml` 里显式指定转换器路径：

```yaml
- insert:
    - id: ui-cad-scene
      name: 'dsh-cad-scene'
      config:
        dwgConverter: 'C:\Program Files\ODA\ODAFileConverter 26.x\ODAFileConverter.exe'
```

`.step` 暂不支持，会给出明确提示。

## 开发 / Development

```sh
npm install
node build.mjs    # 产出 lib/client.js（three + dxf-parser 内联）并拷贝 Host 半区
```

- `src/host.mjs`：Host 半区（工具注册 + DWG 转换路由，loopback-only）
- `src/client.jsx`：浏览器半区（面板 + 工具卡片）
- `src/scene-core.mjs`：DXF→场景 JSON 解析核心（两端共享）
- `lib/` 随仓库提交——从 GitHub 安装无需本地构建（`prepare` 也会兜底构建）

> Windows 提示：所有写入请使用**无 BOM 的 UTF-8**。BOM 会让下游 `JSON.parse` 读取 `package.json` 失败，是很难排查的静默故障。

## 安全与隐私 / Security & privacy

- 图纸解析全部在本机进行，**无任何遥测/外发**
- DWG 转换路由 `POST /api/cad-scene-builder/parse` 仅接受 **loopback** 请求（403 拒绝其他来源）
- 转换在系统临时目录中进行，不修改原文件

## License

MIT © dsh-cad-scene contributors
