// 导入类型定义
import type {
	ExpressiveCodeConfig,  // 表现性代码配置类型
	LicenseConfig,        // 许可证配置类型
	NavBarConfig,         // 导航栏配置类型
	ProfileConfig,        // 个人资料配置类型
	SiteConfig,           // 站点配置类型
} from "./types/config";
import { LinkPreset } from "./types/config";  // 导入链接预设

// 站点配置
export const siteConfig: SiteConfig = {
	title: "ZEC",                              // 站点标题
	subtitle: "Zhangencheng的小破站",          // 站点副标题
	lang: "zh_CN",                            // 语言代码，例如 'en', 'zh_CN', 'ja' 等
	themeColor: {
		hue: 250,      // 主题色的默认色相，范围 0-360。例如：红色:0，青绿色:200，青色:250，粉色:345
		fixed: false,  // 是否为访客隐藏主题色选择器
	},
	banner: {
		enable: false,                         // 是否启用横幅
		src: "assets/images/banner.png",  // 相对于 /src 目录。如果以 '/' 开头则相对于 /public 目录
		position: "center",                    // 相当于 object-position，仅支持 'top', 'center', 'bottom'，默认为 'center'
		credit: {
			enable: false,                     // 是否显示横幅图片的署名信息
			text: "",                          // 要显示的署名文本
			url: "",                           // （可选）原作品或艺术家页面的 URL 链接
		},
	},
	toc: {
		enable: true,  // 是否在文章右侧显示目录
		depth: 2,      // 目录中显示的最大标题深度，范围 1-3
	},
	favicon: [
		{src: '/favicon/icon.png'}
		// 将此数组留空以使用默认 favicon
		// {
		//   src: '/favicon/icon.png',    // favicon 路径，相对于 /public 目录
		//   theme: 'light',              // （可选）'light' 或 'dark'，仅在浅色和深色模式使用不同 favicon 时设置
		//   sizes: '32x32',              // （可选）favicon 尺寸，仅在有多尺寸 favicon 时设置
		// }
	],
};

// 导航栏配置
export const navBarConfig: NavBarConfig = {
	links: [
		LinkPreset.Home,     // 首页链接预设
		LinkPreset.Archive,  // 归档页链接预设
		LinkPreset.About,    // 关于页链接预设
		{
			name: "GitHub",    // 链接名称
			url: "https://github.com/saicaca/fuwari",  // 内部链接不应包含基础路径，会自动添加
			external: true,    // 显示外部链接图标，并在新标签页中打开
		},
	],
};

// 个人资料配置
export const profileConfig: ProfileConfig = {
	avatar: "assets/images/avatar.png",  // 相对于 /src 目录。如果以 '/' 开头则相对于 /public 目录
	name: "ZEC",                      // 姓名
	bio: "猎奇之人与猎奇之站",  // 个人简介
	links: [
		{
			name: "知乎",                   // 链接名称
			icon: "fa6-brands:zhihu",        // 图标代码，访问 https://icones.js.org/ 获取
			// 如果未包含相应图标集，需要安装
			// `pnpm add @iconify-json/<图标集名称>`
			url: "https://www.zhihu.com/people/3vl9uia",        // 链接地址
		},
		{
			name: "GitHub",
			icon: "fa6-brands:github",
			url: "https://github.com/ZEC-dev",
		},
		{
			name: "CSDN",
			icon: "fa6-brands:cuttlefish",
			url: "https://blog.csdn.net/2504_92811338"
		}
	],
};

// 许可证配置
export const licenseConfig: LicenseConfig = {
	enable: true,                                    // 是否启用许可证
	name: "CC BY-NC-SA 4.0",                        // 许可证名称
	url: "https://creativecommons.org/licenses/by-nc-sa/4.0/",  // 许可证链接
};

// 表现性代码配置
export const expressiveCodeConfig: ExpressiveCodeConfig = {
	// 注意：某些样式（如背景色）被覆盖了，请查看 astro.config.mjs 文件
	// 请选择深色主题，因为此博客主题目前仅支持深色背景
	theme: "github-dark",  // 主题名称
};