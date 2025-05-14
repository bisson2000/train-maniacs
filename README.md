## Train Maniacs

<a href="https://www.curseforge.com/minecraft/mc-mods/train-maniacs" target="_blank"><img src="https://cf.way2muchnoise.eu/1265495.svg?badge_style=flat"/></a><a href="https://www.curseforge.com/minecraft/mc-mods/train-maniacs" target="_blank"><img src="http://cf.way2muchnoise.eu/versions/1265495.svg?badge_style=flat" /></a>

![logo](logo.png)


## Where can I find and download the modpack?

You can find the mod on CurseForge: https://legacy.curseforge.com/minecraft/mc-mods/train-maniacs


## Server installation guide

Make sure you have Java 17 installed on your machine. You can check this by opening CMD (Command prompt) and typing `java --version`


### Forge installation

#### Automatic Forge installation

1. After the server pack has been extracted, run `installforge.bat` (Windows) or `installforge.sh` (Linux). This will install forge 47.4.0 in the root directory (Where config, mods, etc... are located).

#### Manual Forge installation

1. After the server pack has been extracted, download the forge [47.4.0 installer](https://maven.minecraftforge.net/net/minecraftforge/forge/1.20.1-47.4.0/forge-1.20.1-47.4.0-installer.jar). You can find the installer on [curseforge](https://files.minecraftforge.net/net/minecraftforge/forge/index_1.20.1.html). The installer should be a jar file

2. Run the forge installer

3. The forge installer will open. Select `Install Server` and choose the installation location to be the root directory of the modpack

4. The `run.bat` (Windows) and the `run.sh` (Linux) scripts will get generated.

5. To remove the GUI, add `nogui` at the end of those scripts

### Launching the server

By default `run.bat` and `run.sh` are configured to use 8GB of memory. You can change this with Xms and Xmx in `user_jvm_args.txt`. 8GB is recommended, but you can go higher if you want to.

1. Run the start script `run.bat` if on Windows, `run.sh` if on Linux

2. `eula.txt` will get generated. The server cannot start if you don't agree to the eula. Open `eula.txt` and change the value to `true` if you agree to the eula [https://aka.ms/MinecraftEULA](https://aka.ms/MinecraftEULA)

3. Re-run the start script after agreeing to the eula and the server should boot


### Aditional information

The server pack has the following mods removed, because they are client-side only:
- better ping display
- bwncr (bad wither no cookie)
- Ding
- entity_texture_features
- ExtremeSoundMuffler
- Fast IP Ping
- gpumemleakfix
- ImmediatelyFast
- MouseTweaks
- probejs
- transparent