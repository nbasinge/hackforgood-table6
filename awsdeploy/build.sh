#/bin/bash
rm -rf lambda-package/cv2 build/numpy
mkdir -p lambda-package/cv2 build/numpy
cp ~/.local/lib/python3.6/site-packages/cv2/cv2.cpython-36m-x86_64-linux-gnu.so lambda-package/cv2/__init__.so
cp -L ~/.local/lib/python3.6/site-packages/cv2/cv2.cpython-36m-x86_64-linux-gnu.so lambda-package/cv2
touch lambda-package/cv2/__init__.py
cp template.py lambda-package/lambda_function.py