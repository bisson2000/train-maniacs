@echo off

set "JAVA=java"
set "FORGE_VERSION=1.20.1-47.3.22"

REM Check if Forge is installed
if not exist libraries\net\minecraftforge\forge\%FORGE_VERSION%\win_args.txt (
	if not exist forge-%FORGE_VERSION%-installer.jar (
		echo Downloading Forge %FORGE_VERSION%
		powershell -Command "(New-Object Net.WebClient).DownloadFile('https://maven.minecraftforge.net/net/minecraftforge/forge/%FORGE_VERSION%/forge-%FORGE_VERSION%-installer.jar', 'forge-%FORGE_VERSION%-installer.jar')"
		echo Forge %FORGE_VERSION% downloaded
	)
    echo Installing Forge %FORGE_VERSION%
	%JAVA% -jar forge-%FORGE_VERSION%-installer.jar --installServer
	echo Forge %FORGE_VERSION% installed.

    REM Generate run.bat
    (
    echo @echo off
    echo REM Forge requires a configured set of both JVM and program arguments.
    echo REM Add custom JVM arguments to the user_jvm_args.txt
    echo REM Add custom program arguments {such as nogui} to this file in the next line before the %%* or
    echo REM  pass them to this script directly
    echo %JAVA% @user_jvm_args.txt @libraries/net/minecraftforge/forge/%FORGE_VERSION%/win_args.txt nogui %%*
    echo pause
    ) > run.bat

    REM # Generate run.sh
    (
    echo #!/usr/bin/env sh
    echo # Forge requires a configured set of both JVM and program arguments.
    echo # Add custom JVM arguments to the user_jvm_args.txt
    echo # Add custom program arguments {such as nogui} to this file in the next line before the "$@" or
    echo #  pass them to this script directly
    echo %JAVA% @user_jvm_args.txt @libraries/net/minecraftforge/forge/%FORGE_VERSION%/unix_args.txt nogui "$@"
    ) > run.sh

    pause
) else (
    echo Forge %FORGE_VERSION% is already installed.
    pause
)


:eof