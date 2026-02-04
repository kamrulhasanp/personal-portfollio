export async function downloadFile(url, filename) {
    // Fetch the file as a blob (works well even if you want to protect the real file URL later)
    const res = await fetch(url)
    if (!res.ok) throw new Error(`Failed to download: ${res.status}`)
  
    const blob = await res.blob()
    const blobUrl = window.URL.createObjectURL(blob)
  
    const a = document.createElement('a')
    a.href = blobUrl
    a.download = filename || url.split('/').pop() || 'download'
    document.body.appendChild(a)
    a.click()
    a.remove()
  
    window.URL.revokeObjectURL(blobUrl)
  }
  