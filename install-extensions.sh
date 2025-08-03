#!/bin/bash

# VS Code Extension Installation Script for Signature Cleaners Project
echo "Installing recommended VS Code extensions..."

# Core Development Extensions
code --install-extension ms-vscode.vscode-typescript-next
code --install-extension bradlc.vscode-tailwindcss
code --install-extension ms-vscode.vscode-json

# React Development
code --install-extension dsznajder.es7-react-js-snippets
code --install-extension formulahendry.auto-rename-tag
code --install-extension christian-kohler.path-intellisense

# Code Quality
code --install-extension esbenp.prettier-vscode
code --install-extension dbaeumer.vscode-eslint
code --install-extension streetsidesoftware.code-spell-checker

# Git Integration
code --install-extension eamodio.gitlens
code --install-extension github.vscode-pull-request-github

# Database Tools
code --install-extension humao.rest-client
code --install-extension mtxr.sqltools
code --install-extension mtxr.sqltools-driver-pg

# UI & Productivity
code --install-extension vscode-icons-team.vscode-icons
code --install-extension pkief.material-icon-theme
code --install-extension visualstudioexptteam.vscodeintellicode

# Additional Tools
code --install-extension wayou.vscode-todo-highlight
code --install-extension aaron-bond.better-comments
code --install-extension ms-vscode.vscode-dotenv
code --install-extension redhat.vscode-yaml
code --install-extension steoates.autoimport-es6-ts

echo "All extensions installed successfully!"
echo "Please restart VS Code to ensure all extensions are properly loaded."