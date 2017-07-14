[Back to overview](../README.md)

# OBS Settings

## Encoding

### *Video Encoding*

> **Encoder:** `x264`  
> **Use CBR:** ![Check](../Images/check.png)  
> **Enable CBR padding:** ![Check](../Images/check.png)  
> **Use Custom Buffer Size:** ![Check](../Images/check.png)  
> **Max Bitrate (kb/s):** `4500`  
> **Buffer Size (kbit):** `6000`  

### *Audio Encoding*

> **Codec:** `AAC`  
> **Bitrate:** `160`  
> **Format:** `48kHz`  
> **Channel:** `stereo`

## Broadcast Settings

> **Mode:** `Live Stream`  
> **Streaming Service:** `Twitch`  
> **FMS URL:** `EU: Paris, FR`  
> **Play Path/Stream Key (if any):** `put your own stream key here (find it on the dashboard)`  
> **Auto-Reconnect:** ![Check](../Images/check.png)  
> **Auto-Reconnect Timeout:** `10`  
> **Delay (seconds):** `0`  
> **Minimize Network Impact:** ![Empty](../Images/empty.png)  
> **Keep recording if live stream stops:** ![Empty](../Images/empty.png)  
> **File Path:** `E:\Videos\$T.mp4`  
> **Replay Buffer length (seconds):** `20`  
> **Replay Buffer File Path:** `E:\Videos\Replay-$T.flv`  
## Video

> **Video Adapter:** `NVIDIA GeForce GTX 970`  
> **Base Resolution:** `1920`x`1080`  
> **Resolution Downscale:** `1.50 (1280x720)`  
> **Filter:** `Lanczos (best detail, 36 samples)`  
> **FPS:** `60`  

## Audio

> **Desktop Audio Device:** `Default`  
> **Microphone/Auxiliary Audio Device:** `Default`  
> ![Check](../Images/check.png) **Force Microphone/Auxiliary to Mono**  
> ![Check](../Images/check.png) **Show only connected devices**  
> **Push-to-talk Delay (milliseconds):** `0`  
> **Desktop Boost (multiple):** `4`  
> **Mic/Aux Boost (multiple):** `1`  
> **Mic Sync Offset (milliseconds):** `0`  

## Hotkeys

### *Audio*

> ![Check](../Images/empty.png) **Use Push-to-talk**  
> **Push-to-Talk:** `Mouse 5`  
> **Push-to-Talk 2:** `None`  
> **Mute/Unmute Mic:** `None`  
> **Mute/Unmute Desktop:** `None`  

### *Broadcast*

> **Start Stream:** `None`  
> **Stop Stream:** `None`  
> **Start Recording:** `None`  
> **Stop Recording:** `None`  
> **Start Replay Buffer:** `None`  
> **Stop Replay Buffer:** `None`  
> **Save Replay Buffer:** `None`  
> **Record from Replay Buffer:** `None`  


## Advanced 

### *General*

> ![Check](../Images/check.png) **Use Multithreaded Optimizations**  
> **Process Priority Class:** `Above Normal`  
> **Scene Buffering Time (milliseconds):** `700`  
> ![Check](../Images/check.png) **Disable encoding while previewing**  
> ![Check](../Images/check.png) **Allow other modifiers on hotkeys**  

### *Video*

> **x264 CPU Preset:** `veryfast`  
> **Encoding Profile:** `main`  
> **Keyframe Interval (seconds, 0=auto):** `2`  
> ![Check](../Images/check.png) **Use CFR**  
> ![Empty](../Images/empty.png) **Custom x264 Encoder Settings**  
> `None`  
> ![Check](../Images/check.png) **Encode in Full Range**  
> ![Empty](../Images/empty.png) **Allow 61-120 FPS entry in video settings**  

### *Audio*

> ![Check](../Images/check.png) **Force desktop audio to use video timestamps as a base for audio time**  
> **Global Audio Sync Offset (milliseconds):** `0`  
> ![Empty](../Images/empty.png) **Use Mic QPC timestamps**  

### *Network*

> ![Check](../Images/check.png) **Automatic low latency mode**  
> **Bind To Interface:** `Default`  
> **Latency tuning factor:** `0`  
> ![Empty](../Images/empty.png) **Disable TCP send window optimization**  

[Back to overview](../README.md)
