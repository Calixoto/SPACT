export interface MusicType {
  items: {
    id: {
      videoId: string;
    };
    snippet: {
      channelTitle: string;
      description: string;
      title: string;
      thumbnails: {
        medium: {
          url: string;
        };
      };
    };
  }[];
}
