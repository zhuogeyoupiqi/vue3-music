
import type { Menus} from './interface'

export const meuns:Menus[] = [
  {
    name: '在线音乐',
    menus: [
      {
        name: '推荐',
        key: 'recommend',
        icon: 'icon-music-tuijian'
      },
      {
        name: '音乐馆',
        key: 'music_hall',
        icon: 'icon-music-yinle'
      },
      {
        name: '视频',
        key: 'video',
        icon: 'icon-music-shipin'
      },
      {
        name: '电台',
        key: 'radio',
        icon: 'icon-music-diantai'
      }
    ]
  },
  {
    name: '我的音乐',
    menus: [
      {
        name: '我喜欢',
        key: '',
        icon: 'icon-music-tuijian'
      },
      {
        name: '本地歌曲',
        key: '',
        icon: 'icon-music-yinle'
      },
      {
        name: '下载歌曲',
        key: '',
        icon: 'icon-music-shipin'
      },
      {
        name: '最近播放',
        key: '',
        icon: 'icon-music-diantai'
      }
    ]
  }
]