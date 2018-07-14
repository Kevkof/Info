[Back to overview](../README.md)

# Config

## <img src="../Images/warning.png" alt="warning" height="42" width="42">  Using this config is against TOS and is therefore completely at your own risk.

------
  
<img src="../Images/warning.png" alt="warning" height="20" width="20">  You can't create new characters with this config installed

### How to install: 

1. Download the config. [link](https://www.dropbox.com/s/mar34fm9n1zw2ir/APB_fix.zip?dl=1)
2. Install the config: Just copy the 'APB Reloaded' folder from the .zip file to your apb folder (merge both APB Reloaded folders)
3. Launch APB from the `APB.exe` that you can find in the folder `APB Reloaded\Binaries` (you can just make a shortcut for this)

### Picture Guide(for the install):

![Step 1](https://i.imgur.com/8kZqE6y.png)

![Step 2](https://i.imgur.com/J0iqw7L.png)

![Step 3](https://i.imgur.com/FjFOW0E.png)

### Shorcut Parameters

![Shortcut](https://i.imgur.com/vhUJk7B.png)

```
"C:\Program Files (x86)\Steam\steamapps\common\APB Reloaded\Binaries\APB.exe"
```

### How do I go back

You can go back at anytime, just open the normal launcher for the game, click on `Options >` and then hit `Repair`

------
------

### What is changed/What does it do

#### Binaries

- Disabled the ingame VOIP  `(VivoxVoiceService.exe)`
- Disabled the game crash error window `(APB_Catcher.exe)`
- Disabled the ingame browser (the one you use if you login with your email and password) `(APB_Gecko.exe)`

#### APBGame/Config

- This just contains the default quality settings (As Far As I'm Aware) `(APBCompat.ini)`

#### APBGame/Content/Audio

- Ingame music has been removed `(DefaultMusicLibrary)`
- The background sounds in district have been removed `(FilePackages)`
- Themes and player created songs are disabled `(MusicStudio)`
- Some of the noise generating artifacts are removed (for example the boiler in asylum) `(ParameterAssets)`

#### APBGame/Content/Release/Maps

- The login screen graphics are disabled (Credit for this goes to Tobii), this helps lower the launch time `(APBLoginLevel.apb)`

#### APBGame/Movies

- Removed the videos that show at the start (to further lower the launch time), left the other ones in for smoother transitions `(ÌntroTitles.bik, SplashScreen.bik)`

[Back to overview](../README.md)
