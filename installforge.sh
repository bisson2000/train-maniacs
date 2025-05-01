#!/usr/bin/env sh

JAVA=java
FORGE_VERSION=1.20.1-47.4.0

# Check if Forge is installed
if [ ! -f "libraries/net/minecraftforge/forge/$FORGE_VERSION/unix_args.txt" ]; then
    if [ ! -f "forge-$FORGE_VERSION-installer.jar" ]; then
        echo "Downloading Forge $FORGE_VERSION"
        curl -o "forge-$FORGE_VERSION-installer.jar" "https://maven.minecraftforge.net/net/minecraftforge/forge/$FORGE_VERSION/forge-$FORGE_VERSION-installer.jar"
        echo "Forge $FORGE_VERSION downloaded"
    fi

    echo "Installing Forge $FORGE_VERSION"
    $JAVA -jar "forge-$FORGE_VERSION-installer.jar" --installServer
    echo "Forge $FORGE_VERSION installed."

    # Generate run.bat
    cat <<EOF > run.bat
@echo off
REM Forge requires a configured set of both JVM and program arguments.
REM Add custom JVM arguments to the user_jvm_args.txt
REM Add custom program arguments {such as nogui} to this file in the next line before the %%* or
REM  pass them to this script directly
$JAVA @user_jvm_args.txt @libraries/net/minecraftforge/forge/$FORGE_VERSION/win_args.txt nogui %%*
pause
EOF

    # Generate run.sh
    cat <<EOF > run.sh
#!/usr/bin/env sh
# Forge requires a configured set of both JVM and program arguments.
# Add custom JVM arguments to the user_jvm_args.txt
# Add custom program arguments {such as nogui} to this file in the next line before the "\$@" or
#  pass them to this script directly
$JAVA @user_jvm_args.txt @libraries/net/minecraftforge/forge/$FORGE_VERSION/unix_args.txt nogui "\$@"
EOF

    chmod +x run.sh
else
    echo "Forge $FORGE_VERSION is already installed."
fi
