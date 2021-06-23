export default class Helper {
  static prepareRowData (data: any) {
    return data.items.map((item: any) => {
      return {
        videoId: item.id.videoId,
        checkbox: item.checkbox,
        thumbnails: item.snippet.thumbnails.default.url,
        publishedAt: new Date(item.snippet.publishedAt).toLocaleString().slice(0,-3),
        title: item.snippet.title,
        description: item.snippet.description,
      };
    });
  }
}
