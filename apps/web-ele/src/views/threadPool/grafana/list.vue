<!--
 * @Descripttion:
 * @version: 1.0.0
 * @Author: fulei🐰
 * @Date: 2025-06-07 10:34:27
 * @LastEditors: fulei🐰
 * @LastEditTime: 2025-06-07 18:55:36
-->
<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import { getGrafanaUrl } from '#/api/threadPools'

const grafanaUrl = ref('')

async function loadGrafanaUrl() {
  try {
    const res = await getGrafanaUrl()
    grafanaUrl.value = res
  } catch (error) {
    console.error('获取Grafana地址失败', error)
    // 失败时给一个默认值，防止空白
    grafanaUrl.value = `http://192.168.17.128:3000/d/gxBvKxYNz/e58aa8-e68081-e7babf-e7a88b-e6b1a0?orgId=1&theme=light&from=now-12h&to=now&timezone=browser&var-application_name=&var-dynamic_thread_pool_id=&refresh=5s`
  }
}

onMounted(() => {
  loadGrafanaUrl()
})
</script>

<template>
  <Page>
    <!-- 居中提示行 -->
    <div style="text-align: center; margin: 12px 0;">
      <a
        :href="grafanaUrl"
        target="_blank"
        title="在新窗口中全屏查看"
        style="color: #409EFF; text-decoration: none;"
      >
        在新窗口打开监控面板
      </a>
    </div>

    <!-- iframe 展示 -->
    <iframe
      :src="grafanaUrl"
      width="100%"
      height="900"
      frameborder="0"
      style="border: none;"
      title="线程池监控仪表板"
    ></iframe>
  </Page>
</template>
