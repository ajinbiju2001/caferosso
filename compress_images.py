import os
from PIL import Image

menu_dir = '/Users/ajinb/Documents/caferosso/menu'

for filename in os.listdir(menu_dir):
    if filename.lower().endswith(('.png', '.jpg', '.jpeg')) and not filename.startswith('.'):
        filepath = os.path.join(menu_dir, filename)
        name, ext = os.path.splitext(filename)
        webp_filename = name + '.webp'
        webp_filepath = os.path.join(menu_dir, webp_filename)
        
        try:
            with Image.open(filepath) as img:
                # Save as webp with 80% quality
                img.save(webp_filepath, 'WEBP', quality=80)
                orig_size = os.path.getsize(filepath) / (1024 * 1024)
                new_size = os.path.getsize(webp_filepath) / (1024 * 1024)
                print(f"Compressed {filename} ({orig_size:.2f} MB) -> {webp_filename} ({new_size:.2f} MB) - Saved {((orig_size - new_size)/orig_size)*100:.1f}%")
        except Exception as e:
            print(f"Failed to compress {filename}: {e}")
