# Copyright (c) 2026 Uno Kim / AMEVA Foundation. All rights reserved.
# SPDX-License-Identifier: Apache-2.0 OR Commercial-License
"""Minimal setup.py wrapper for backward-compatibility with editable installs."""

from setuptools import setup

setup(
    install_requires=[
        "requests>=2.31.0",
        "tqdm>=4.66.0",
    ]
)
